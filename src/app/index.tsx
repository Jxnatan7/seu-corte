import React from "react";
import { Redirect } from "expo-router";
import { useNavigation } from "expo-router";


export default function Index() {
  const navigation = useNavigation();
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    if (!navigation?.isFocused) return;

    setReady(true);
  }, [navigation?.isFocused]);

  if (ready) return <Redirect href="/login" />;

  return <Redirect href="/login"/>;
}