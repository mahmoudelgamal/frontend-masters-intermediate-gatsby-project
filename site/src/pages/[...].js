import * as React from "react";
import { navigate } from "gatsby";

export default function RedirectToAccountDashboard() {
  React.useEffect(() => {
    navigate("/", { replace: true });
  }, []);

  return null;
}