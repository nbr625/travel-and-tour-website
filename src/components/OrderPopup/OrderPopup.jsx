import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const OrderPopup = ({
  orderPopup,
  setOrderPopup,
  selectedDestination = "",
}) => {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    destination: "",
    notes: "",
  });

  const [submitted, setSubmitted] =
    React.useState(false);

  React.useEffect(() => {
    if (!orderPopup) return undefined;

    setForm((current) => ({
      ...current,
      destination:
        selectedDestination || current.destination,
    }));

    setSubmitted(false);

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setOrderPopup(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener(
        "keydown",
        closeOnEscape
      );
    };
  }, [
    orderPopup,
    selectedDestination,
    setOrderPopup,
  ]);

  const updateField = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (!orderPopup) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm"
      onMouseDown={() => setOrderPopup(false)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="trip-dialog-title"
        className="w-full max-w-lg rounded-3xl bg-white p-6 text-slate-900 shadow-2xl sm:p-8"
        onMouseDown={(event) =>
          event.stopPropagation()
        }
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Trip inquiry
            </p>

            <h2
              id="trip-dialog-title"
              className="mt-1 text-2xl font-bold"
            >
              Tell us what you are considering
            </h2>
          </div>

          <button
            type="button"
            onClick={() => setOrderPopup(false)}
            aria-label="Close trip inquiry"
            className="rounded-full p-1 text-3xl transition hover:bg-slate-100"
          >
            <IoCloseOutline />
          </button>
        </div>

        {submitted ? (
          <div
            className="py-10 text-center"
            aria-live="polite"
          >
            <h3 className="text-2xl font-bold">
              Thanks, {form.name}.
            </h3>

            <p className="mx-auto mt-3 max-w-sm leading-7 text-slate-600">
              This portfolio prototype stops here, so no inquiry
              was transmitted. The completed state demonstrates
              how the production flow would respond.
            </p>

            <button
              type="button"
              onClick={() => setOrderPopup(false)}
              className="mt-6 rounded-full bg-primary px-6 py-3 font-semibold text-white"
            >
              Close
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-6 space-y-4"
          >
            <div>
              <label
                htmlFor="inquiry-name"
                className="text-sm font-semibold"
              >
                Name
              </label>

              <input
                id="inquiry-name"
                name="name"
                value={form.name}
                onChange={updateField}
                required
                autoFocus
                className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div>
              <label
                htmlFor="inquiry-email"
                className="text-sm font-semibold"
              >
                Email
              </label>

              <input
                id="inquiry-email"
                name="email"
                type="email"
                value={form.email}
                onChange={updateField}
                required
                className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div>
              <label
                htmlFor="inquiry-destination"
                className="text-sm font-semibold"
              >
                Destination or region
              </label>

              <input
                id="inquiry-destination"
                name="destination"
                value={form.destination}
                onChange={updateField}
                placeholder="Where would you like to go?"
                required
                className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div>
              <label
                htmlFor="inquiry-notes"
                className="text-sm font-semibold"
              >
                What matters most?
              </label>

              <textarea
                id="inquiry-notes"
                name="notes"
                value={form.notes}
                onChange={updateField}
                rows="3"
                placeholder="Timing, pace, interests, or accessibility needs"
                className="mt-1 w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <p className="text-xs leading-5 text-slate-500">
              Demo mode: submitting this form does not send or
              store personal information.
            </p>

            <button
              type="submit"
              className="w-full rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Preview confirmation
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default OrderPopup;
