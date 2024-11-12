import {
  FacebookIcon,
  InstagramPhoneIcon,
  YoutubeIcon,
} from "../../assets/icons";

export default function Legant() {
  return (
    <div>
      <h2 className="mb-8 text-2xl font-semibold text-neutral-06">3legant.</h2>

      <ul className="mb-4">
        <li className="mb-6 leading-8 sm:w-32">
          43111 Hai Trieu street, District 1, HCMC Vietnam
        </li>
        <li className="mt-4">84-756-3237</li>
      </ul>

      <div className="flex gap-4 max-sm:justify-center">
        <InstagramPhoneIcon />
        <FacebookIcon />
        <YoutubeIcon />
      </div>
    </div>
  );
}
