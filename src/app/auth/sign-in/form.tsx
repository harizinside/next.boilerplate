import Alert from "@/app/components/Alerts";
import {
  Fieldset,
  Legend,
  Field,
  Label,
  Input,
  Button,
} from "@headlessui/react";

export default function Form() {
  return (
    <>
      <Alert message="This is an alert" type="info" />
      <form action="" className="pt-4">
        <Fieldset>
          <Legend className="text-lg font-bold">Signin</Legend>
          <Field>
            <Label className="block">Email</Label>
            <Input type="email" className="mt-1 block" name="email" />
          </Field>
          <Field>
            <Label className="block">Password</Label>
            <Input type="password" className="mt-1 block" name="password" />
          </Field>
          <Field className="pt-4">
            <Button
              type="submit"
              className="rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700"
            >
              Sign in
            </Button>
          </Field>
        </Fieldset>
      </form>
    </>
  );
}
