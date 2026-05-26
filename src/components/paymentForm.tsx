import quizSteps from "@/data/quizSteps.json";
import { IMaskInput } from "react-imask";

interface Props {
  onChange: (value: string | number, id: string) => void;
}

export default function PaymentForm({ onChange }: Props) {
  const formData = quizSteps.at(-1)?.paymentFields;

  return (
    <section className="grid grid-cols-1 grid-rows-[auto_1fr] w-full gap-4">
      <h1 className="text-text font-sans text-2xl text-left font-semibold min-h-16 flex items-center">
        {formData?.question}
      </h1>
      
      <div className="flex flex-col gap-4 w-full">
        {formData?.fields?.map((item) => (
          <label key={item.id} className="flex flex-col gap-2 text-accent font-mono font-semibold">
            {item.label}
            <IMaskInput
              type={item.type}
              className="h-13 w-full outline-none text-text border border-gray-400 p-2 rounded-xl user-invalid:border-error-border user-valid:border-accent"
              placeholder={item.placeholder}
              minLength={item.validation.minLength}
              mask={item.validation.mask}
              required={item.required}
              onChange={event => onChange(event.target.value, item.id)}
            />
          </label>
        ))}
      </div>
    </section>
  );
}