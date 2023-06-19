import { ServiceContextObj } from "@/contexts/service-context";
import { useContext } from "react";
import { ServiceContextType } from "@/contexts/service-context";

export default function useServiceIndex() {
  const serviceContextValue = useContext(ServiceContextObj);

  const forReturn: [ServiceContextType["activeIndex"]["state"], ServiceContextType["activeIndex"]["setterFunc"]] = [
    serviceContextValue.activeIndex.state,
    serviceContextValue.activeIndex.setterFunc
  ];

  return forReturn;
}
