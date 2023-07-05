import Image from "next/image";
import { useRef, useEffect, useState } from "react";

export default function Edge() {
  const [background, setBackground] = useState(0);
  const cardContainerRef = useRef<HTMLDivElement>(null);

  const data = [
    {
      spanData: "Professional",
      para: "Professional approach and commitment.  Understand the Clients requirements thoroughly and equip that only the most suitably qualified candidates are presented to the clients."
    },
    {
      spanData: "Recruitment",
      para: "Thorough screening and recruitment process to ensure that only the most suitably qualified candidates are presented to the clients."
    },
    {
      spanData: "Partnerships",
      para: "Customized and tailored services to meet the specific, individual needs of the clients."
    },
    {
      spanData: "Customization",
      para: "Transparent and long term business partnerships to demonstrate our ongoing commitment to deliver the best quality of service our clients require."
    },
    {
      spanData: "Counselling",
      para: "Help each individual to realize his/her potential and to grow in his/her career path by providing right guidance and counselling."
    }
  ];

  useEffect(() => {
    const cardElem = cardContainerRef.current;
    if (cardElem) {
      const children = Array.from(cardElem?.querySelectorAll(".edge-cards") ?? []);
      const cardObserverCallback: IntersectionObserverCallback = (changedElems) => {
        changedElems.forEach((card) => {
          if (card.isIntersecting) {
            const i = children.findIndex((node) => node.isEqualNode(card.target));
            setBackground(i);
          }
        });
      };

      const cardObserver: IntersectionObserver = new IntersectionObserver(cardObserverCallback, {
        root: null,
        rootMargin: "-120px",
        threshold: 0.8
      });
      children.forEach((card) => cardObserver.observe(card));

      return () => {
        cardObserver.disconnect();
      };
    }
  }, [cardContainerRef]);

  return (
    <div className="edge container">
      <div className="main-text">
        <h3>Our Edge</h3>
        <p className="edge-desc">
          We are capable of serving all Sectors of business operations for the Recruitment & Selection.
        </p>
      </div>
      <div className="scroll">
        {data.map((item, index: number) => {
          return (
            <span className={background === index ? "active" : "inactive"} key={index}>
              {item.spanData}
            </span>
          );
        })}
      </div>
      <div className="card-container" ref={cardContainerRef}>
        {data.map((item, index) => {
          return (
            <div className={`edge-cards _${index}`} key={index}>
              <div className="img-container">
                <Image src="/assets/images/hero-img.jpg" alt={item.spanData} fill />
              </div>
              <div className="text">
                <h4>
                  {`${index + 1}.`} {item.spanData}
                </h4>
                <p>{item.para}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
