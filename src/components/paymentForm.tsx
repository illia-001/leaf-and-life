import quizSteps from "@/data/quizSteps.json";
import { IMaskInput } from "react-imask";

interface Props {
  onChange: (value: string | number, id: string) => void
}

export default function PaymentForm({onChange}: Props) {
  const formData = quizSteps.at(-1)?.paymentFields;
  

  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-text font-sans text-2xl text-center font-semibold h-16">
        {formData?.question}
      </h1>
      {formData?.fields?.map((item) => (
        <label key={item.id} className="flex flex-col gap-2 text-accent font-mono font-semibold">
          {item.label}
          <IMaskInput
            type={item.type}
            className="h-13 w-full md:w-100 outline-none text-text border border-gray-400 p-2 rounded-xl user-invalid:border-red-400 user-valid:border-accent"
            placeholder={item.placeholder}
            minLength={item.validation.minLength}
            mask={item.validation.mask}
            required={item.required}
            onChange={event => onChange(event.target.value, item.id)}
          />
        </label>
      ))}
    </section>
  );
}
