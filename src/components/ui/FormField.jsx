export const inputClass =
  'w-full border border-black/15 px-4 py-3 text-base bg-white transition-colors focus:outline-none focus:border-gold focus-visible:ring-2 focus-visible:ring-gold/30';

/** Champ de formulaire avec libellé et astérisque « obligatoire » accessible. */
export default function FormField({ id, label, required, requiredLabel, children }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm text-black mb-1.5">
        {label}
        {required && (
          <span className="text-gold" aria-hidden="true">
            {' '}*
          </span>
        )}
        {required && <span className="sr-only"> ({requiredLabel})</span>}
      </label>
      {children}
    </div>
  );
}
