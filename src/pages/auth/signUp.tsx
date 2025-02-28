import DefaultLayout from "@/layouts/default";
import SignUp from "@/components/auth/SignUp";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <SignUp/>
        </div>
      </section>
    </DefaultLayout>
  );
}
