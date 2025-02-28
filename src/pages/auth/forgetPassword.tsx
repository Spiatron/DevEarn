import DefaultLayout from "@/layouts/default";
import ForgetPassword from "@/components/auth/ForgetPassword";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <ForgetPassword/>
        </div>
      </section>
    </DefaultLayout>
  );
}
