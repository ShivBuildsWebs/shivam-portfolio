import { useState } from "react";
import styles from "./Contact.module.css";

const packages = [
  { label: "Static One-Page Website", price: 5499 },
  { label: "Multi-Page Static Website", price: 6499 },
  { label: "Animated One-Page Website", price: 8499 },
  { label: "Animated Multi-Page Website", price: 10999 },
  { label: "Full Frontend + Backend Website", price: null },
  { label: "Other / Custom Project", price: null },
];

const addons = [
  { label: "SEO Optimization", price: 2999 },
  { label: "Monthly Maintenance", price: 599 },
  { label: "Domain & Hosting", price: null },
];

const Contact = () => {
  const [selectedPackage, setSelectedPackage] = useState<string>("");
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [success, setSuccess] = useState<boolean>(false);

  const handleAddonChange = (addonLabel: string) => {
    setSelectedAddons(prev =>
      prev.includes(addonLabel)
        ? prev.filter(item => item !== addonLabel)
        : [...prev, addonLabel]
    );
  };

  const getPackagePrice = () => {
    const pack = packages.find(p => p.label === selectedPackage);
    return pack?.price ?? null;
  };

  const getTotal = () => {
    const base = getPackagePrice() ?? 0;
    const addonsTotal = addons.reduce((sum, addon) => {
      if (selectedAddons.includes(addon.label) && addon.price) {
        return sum + addon.price;
      }
      return sum;
    }, 0);
    return base + addonsTotal;
  };

  const formattedTotal =
    getPackagePrice() !== null ? `₹${getTotal()}` : "Custom Quote";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Add hidden fields manually
    formData.append("Selected Package", selectedPackage);
    formData.append("Selected Addons", selectedAddons.join(", "));
    formData.append("Total Estimate", formattedTotal);

    const response = await fetch("https://formspree.io/f/xldnzzja", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json"
      }
    });

    if (response.ok) {
      setSuccess(true);
      form.reset();
      setSelectedPackage("");
      setSelectedAddons([]);

      // Redirect after 2 sec
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section className={styles.contactSection} id="contact">
      <h2 className={styles.sectionTitle}>Request a Quote</h2>
      {success ? (
        <div className={styles.successMessage}>
          <h3>Thank you! 🎉</h3>
          <p>Your request was submitted successfully.</p>
          <p>Redirecting to the homepage...</p>
        </div>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <label>
            Your Name
            <input type="text" name="name" placeholder="Enter your name" required />
          </label>
          <label>
            Email Address
            <input type="email" name="email" placeholder="Enter your email" required />
          </label>
          <label>
            Phone Number
            <input type="tel" name="phone" placeholder="Optional" />
          </label>
          <label>
            Select Project Type
            <select
              name="Project Type"
              value={selectedPackage}
              onChange={(e) => setSelectedPackage(e.target.value)}
              required
            >
              <option value="">Select a project</option>
              {packages.map((pack) => (
                <option key={pack.label} value={pack.label}>
                  {pack.label}
                  {pack.price !== null ? ` – ₹${pack.price}` : " – Custom Quote"}
                </option>
              ))}
            </select>
          </label>

          {selectedPackage && (
            <div className={styles.addons}>
              <p>Select Add-Ons:</p>
              {addons.map((addon) => (
                <label key={addon.label} className={styles.checkbox}>
                  <input
                    type="checkbox"
                    name="Add-Ons"
                    value={addon.label}
                    checked={selectedAddons.includes(addon.label)}
                    onChange={() => handleAddonChange(addon.label)}
                  />
                  {addon.label}
                  {addon.price !== null ? ` (+₹${addon.price})` : " (Extra)"}
                </label>
              ))}
            </div>
          )}

          {selectedPackage && (
            <div className={styles.summary}>
              <strong>
                Total Estimate: <span>{formattedTotal}</span>
              </strong>
              {getPackagePrice() === null && (
                <p className={styles.disclaimer}>
                  We will contact you to discuss pricing for this project.
                </p>
              )}
            </div>
          )}

          <label>
            Additional Details
            <textarea
              name="Details"
              placeholder="Tell us about your project..."
              rows={4}
            ></textarea>
          </label>

          <button type="submit">Request My Quote</button>
        </form>
      )}
    </section>
  );
};

export default Contact;
