import { IMaskInput } from "react-imask";

interface Props {
  onChange: (value: string | number, id: string) => void;
}

const inputClassNames =
  "h-13 w-full outline-none text-text border border-gray-400 p-2 rounded-xl user-invalid:border-error-border user-valid:border-accent";

export default function PaymentForm({ onChange }: Props) {
  return (
    <section className="grid grid-cols-1 grid-rows-[auto_1fr] max-w-100 gap-4 place-items-center">
      <h1 className="text-text text-2xl text-left font-semibold min-h-16 flex items-center">
        Checkout
      </h1>

      <div className="flex flex-col gap-4">
        <label className="flex flex-col gap-2 text-accent font-semibold">
          Visa/Mastercard
          <IMaskInput
            type="text"
            className={inputClassNames}
            placeholder="Card number"
            minLength={16}
            mask="0000-0000-0000-0000"
            required
            onChange={(event) => onChange(event.target.value, "Number")}
          />
        </label>
        <div className="flex justify-between gap-2">
          <label className="flex flex-col gap-2 text-accent font-semibold">
            Date
            <IMaskInput
              type="text"
              className={inputClassNames}
              placeholder="MM / YY"
              minLength={4}
              mask="00 / 00"
              required
              onChange={(event) => onChange(event.target.value, "Date")}
            />
          </label>
          <label className="flex flex-col gap-2 text-accent font-semibold">
            CVC
            <IMaskInput
              type="text"
              className={inputClassNames}
              placeholder="CVC"
              minLength={3}
              mask="000"
              required
              onChange={(event) => onChange(event.target.value, "CVC")}
            />
          </label>
        </div>
      </div>
    </section>
  );
}
