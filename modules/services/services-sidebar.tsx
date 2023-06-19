import useServiceDescRef from "@/hooks/use-service-desc-ref";
import useServiceContext from "@/hooks/use-service-index";
import { useEffect, useRef } from "react";

export default function ServicesSidebar() {
  const [currentIndex] = useServiceContext();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const serviceDescRef = useServiceDescRef();

  useEffect(() => {
    if (sidebarRef.current) {
      const allLinks = sidebarRef.current.querySelectorAll(".side-item");
      if (currentIndex < allLinks.length) {
        allLinks.forEach((link) => link.classList.remove("serv-active"));
        allLinks[currentIndex].classList.add("serv-active");
      }
    }
  }, [currentIndex]);

  const spanData = [
    { word: "Recruitment & Selection" },
    { word: "Training & Development" },
    { word: "HR Policy & Procedures" },
    { word: "Employee Engagement" },
    { word: "Property Manangement" }
  ];

  return (
    <div className="sidebar" ref={sidebarRef}>
      <h3>Services</h3>
      {spanData.map((entry, index) => {
        const clickHandler = () => {
          const descChildren = Array.from(serviceDescRef.current?.querySelectorAll(".desc-container") ?? []);
          try {
            const scrollToTarget = descChildren[index];
            scrollToTarget.scrollIntoView({ behavior: "smooth" });
          } catch {}
        };
        return (
          <button key={index} onClick={clickHandler} className="side-item">
            {entry.word}
          </button>
        );
      })}
    </div>
  );
}
