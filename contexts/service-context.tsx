import { Dispatch, PropsWithChildren, RefObject, SetStateAction, createContext, useState, useRef } from "react";

export interface ServiceContextType {
  activeIndex: {
    state: number;
    setterFunc: Dispatch<SetStateAction<number>>;
  };
  serviceDescRef: RefObject<HTMLDivElement>;
}

const serviceConstInit: ServiceContextType = {
  activeIndex: {
    state: 0,
    setterFunc: () => void 0
  },
  serviceDescRef: { current: null }
};

export const ServiceContextObj = createContext<ServiceContextType>(serviceConstInit);

export default function ServiceContext({ children }: PropsWithChildren) {
  const serviceDescRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const providerValue: ServiceContextType = {
    activeIndex: {
      state: activeIndex,
      setterFunc: setActiveIndex
    },
    serviceDescRef: serviceDescRef
  };
  return <ServiceContextObj.Provider value={providerValue}>{children}</ServiceContextObj.Provider>;
}
