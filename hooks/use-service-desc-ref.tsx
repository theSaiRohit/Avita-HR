import { ServiceContextObj } from "@/contexts/service-context";
import { useContext } from "react";
import { ServiceContextType } from "@/contexts/service-context";

export default function useServiceDescRef() {
  const serviceContextValue = useContext(ServiceContextObj);

  const forReturn: ServiceContextType["serviceDescRef"] = serviceContextValue.serviceDescRef;

  return forReturn;
}
