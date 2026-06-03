import amplitude from "@/amplitude/amplitude";

export function useQuizTracking() {
  const trackStepCompleted = (step: number, id: string) => {
    amplitude.track("quiz_step_completed", {
      step_number: step + 1,
      question_title: id,
    });
  };

  const trackCheckoutViewed = () => amplitude.track("checkout_viewed");
  const trackQuizStarted = () => amplitude.track("quiz_started");
  const trackPaymentSubmitted = () => amplitude.track("payment_submitted");

  return { trackStepCompleted, trackCheckoutViewed, trackQuizStarted, trackPaymentSubmitted };
}