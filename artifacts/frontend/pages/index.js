import { useState } from "react";
import LandingScreen from "../components/LandingScreen";
import ChatScreen from "../components/ChatScreen";

export default function Home() {
  const [selectedAgency, setSelectedAgency] = useState(null);

  return (
    <main>
      {selectedAgency ? (
        <ChatScreen
          agency={selectedAgency}
          onBack={() => setSelectedAgency(null)}
        />
      ) : (
        <LandingScreen onSelectAgency={setSelectedAgency} />
      )}
    </main>
  );
}
