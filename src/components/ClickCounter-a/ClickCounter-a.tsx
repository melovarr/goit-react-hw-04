interface ClickCounterProps {
  value: number;
  onUpdate: () => void;
}

export default function clickCounterA({ value, onUpdate }: ClickCounterProps) {
  return <button onClick={onUpdate}>Clicked {value} times</button>;
}
