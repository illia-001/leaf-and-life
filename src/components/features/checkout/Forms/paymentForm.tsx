import { IMaskInput } from "react-imask";

const inputClassNames =
  "h-13 w-full focus:shadow-input outline-none text-text border p-2 rounded-xl user-invalid:border-error-border border-accent";

const cardInfoInputs = [
  {
    label: "Date",
    classNames: inputClassNames,
    placeholder: "MM / YY",
    mask: "00/00",
    id: "date",
    minLength: 5,
    autoComplete: "cc-exp",
  },
  {
    label: "CVC",
    classNames: inputClassNames,
    placeholder: "CVC",
    mask: "000",
    id: "cvc",
    minLength: 3,
    autoComplete: "cc-csc",
  },
];

export default function PaymentForm() {
  return (
    <section className="grid grid-cols-1 grid-rows-[auto_1fr] max-w-100 gap-4 place-items-center">
      <h1 className="text-text text-2xl text-left font-semibold min-h-16 flex items-center">
        Checkout
      </h1>

      <div className="flex flex-col gap-4">
        <label className="flex flex-col gap-2 text-accent font-semibold ">
          Visa/Mastercard
          <IMaskInput
            type="text"
            inputMode="numeric"
            autoComplete="cc-number"
            className={inputClassNames}
            placeholder="Card number"
            minLength={16}
            mask="0000-0000-0000-0000"
            required
          />
        </label>
        <div className="flex justify-between gap-2">
          {cardInfoInputs.map((input) => (
            <label
              key={input.id}
              className="flex flex-col gap-2 text-accent font-semibold"
            >
              {input.label}
              <IMaskInput
                type="text"
                inputMode="numeric"
                autoComplete={input.autoComplete}
                className={input.classNames}
                placeholder={input.placeholder}
                minLength={input.minLength}
                mask={input.mask}
                required
              />
            </label>
          ))}
        </div>
      </div>
    </section>
  );
}
