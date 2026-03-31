import { Input } from "./ui/input";

interface WeatherFormProps {
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
}

const WeatherForm = ({ city, setCity }: WeatherFormProps) => {
  return (
    <form className="flex gap-2 relative">
      <Input
        type="text"
        placeholder="Masukkan nama kota..."
        value={city}
        required
        autoFocus
        onChange={(e) => setCity(e.target.value)}
        className="flex-1 px-4 py-6 rounded-full border  focus:outline-none focus:ring-2 focus:ring-white/20"
      />

      <svg
        data-v-39ea7f52=""
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-search-icon lucide-search lucide-icon customizable absolute top-3 right-6"
      >
        <path d="m21 21-4.34-4.34"></path>
        <circle cx="11" cy="11" r="8"></circle>
      </svg>
    </form>
  );
};

export default WeatherForm;
