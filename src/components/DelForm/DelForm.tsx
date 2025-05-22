import { useId } from "react";

export default function DelForm() {
  const selectId = useId();

  const handleOrder = (formData: FormData) => {
    const delivery = formData.get("delivery") as string;
    console.log("Delivery:", delivery);

    const restrictions = formData.getAll("restrictions") as string[];
    console.log("Dietary restrictions:", restrictions);

    const deliveryTime = formData.get("deliveryTime") as string;
    console.log("Preferred delivery time:", deliveryTime);
  };
  return (
    <form action={handleOrder}>
      <fieldset>
        <legend>Delivery method:</legend>
        <label>
          <input type="radio" name="delivery" value="pickup" defaultChecked />
          Pickup
        </label>
        <label>
          <input type="radio" name="delivery" value="courier" />
          Courier
        </label>
        <label>
          <input type="radio" name="delivery" value="drone" />
          Drone delivery
        </label>
      </fieldset>
      <fieldset>
        <legend>Dietary restrictions:</legend>
        <label>
          <input type="checkbox" name="restrictions" value="vegan" />
          Vegan
        </label>
        <label>
          <input type="checkbox" name="restrictions" value="gluten-free" />
          Gluten-free
        </label>
        <label>
          <input type="checkbox" name="restrictions" value="nut-free" />
          Nut-free
        </label>
      </fieldset>
      <label htmlFor={selectId}>Preferred delivery time</label>
      <select name="deliveryTime" id={selectId} defaultValue="">
        <option value="">-- Choose delivery time --</option>
        <option value="morning">Morning (8:00-12:00)</option>
        <option value="afternoon">Afternoon (12:00-16:00)</option>
        <option value="evening">Evening (16:00-20:00)</option>
      </select>
      <button type="submit">Place order</button>
    </form>
  );
}
