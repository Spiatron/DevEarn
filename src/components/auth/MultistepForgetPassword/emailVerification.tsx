import {Input} from "@heroui/input";
import {Button} from "@heroui/button";

interface EmailVerificationProps {
    onNext: () => void;
    identifier: string;
    onIdentifierChange: (value: string) => void;
  }
  
  export function EmailVerification({
    onNext,
    identifier,
    onIdentifierChange,
  }: EmailVerificationProps) {
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (identifier) {
        onNext();
      }
    };
  
    return (
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">Forgot Password</h1>
          <p className="text-default-500">
            Enter your username or email address to receive a verification code.
          </p>
        </div>
        <Input
          isRequired
          label="Username or Email"
          placeholder="Enter your username or email"
          value={identifier}
          variant="bordered"
          onValueChange={onIdentifierChange}
        />
        <Button
          className="mt-4"
          color="primary"
          isDisabled={!identifier}
          type="submit"
        >
          Next
        </Button>
      </form>
    );
  }