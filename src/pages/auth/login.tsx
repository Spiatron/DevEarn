import DefaultLayout from "@/layouts/default";
import LoginCard from "@/components/auth/LoginCard";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="h-screen flex items-center justify-center">
        <div className="translate-y-[-40%]">
          <LoginCard />
        </div>
      </section>
    </DefaultLayout>
  );
}
