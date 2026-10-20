import { SITE } from '../config/site';

// Clé gratuite à créer sur https://web3forms.com (avec l'adresse de réception contact@…),
// puis à déclarer dans Vercel : VITE_WEB3FORMS_KEY. Sans clé → repli sur le logiciel de messagerie.
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

export const canSendDirectly = Boolean(WEB3FORMS_KEY);

/**
 * Envoie un message à l'hôtel.
 *   → 'sent' si envoyé via Web3Forms, 'mailto' si la messagerie du visiteur a été ouverte.
 * Lève une erreur si l'envoi a échoué.
 */
export async function sendMessage({ subject, name, email, body, isBot = false }) {
  if (!WEB3FORMS_KEY) {
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    return 'mailto';
  }
  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ access_key: WEB3FORMS_KEY, subject, from_name: name, replyto: email, botcheck: isBot, message: body }),
  });
  const json = await res.json();
  if (!json.success) throw new Error(json.message);
  return 'sent';
}
