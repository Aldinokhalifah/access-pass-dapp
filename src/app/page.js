import CreatePassForm from "@/components/CreatePassForm";
import PassList from "@/components/PassList";
import WalletButton from "@/components/WalletButton";

export default function Home() {
  return (
    <main style={{ padding: 20 }}>
      <h1>Access Pass DApp</h1>
      <p>Blockchain access control system</p>

      <WalletButton />
      <CreatePassForm />
      <PassList />
    </main>
  );
}