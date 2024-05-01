import SignInButton from "./button/signInButton";
import SignUpButton from "./button/signUpButton";

export default function Header() {
  return (
    <div className="w-full flex h-20 shadow-sm justify-center">
      <div className="flex justify-between w-[80%] items-center">
        <span>Tripster</span>
        <div className="flex gap-2">
          <SignInButton />
          <SignUpButton />
        </div>
      </div>
    </div>
  );
}
