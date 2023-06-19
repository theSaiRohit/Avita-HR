import useServiceDescRef from "@/hooks/use-service-desc-ref";
import useServiceIndex from "@/hooks/use-service-index";
import Image from "next/image";
import { Fragment, useEffect } from "react";

export default function ServicesDesc() {
  const [_, setCurrentIndex] = useServiceIndex();
  const serviceDescRef = useServiceDescRef();

  const egData = [
    {
      h2Value: "Recruitment and Selection",
      imgSrc: "hero-img.jpg",
      alt: "alt",
      pData:
        "Recruitment and placement of suitable candidates for all levels (staff and management cadre) is done by us using modern techniques of interviewing, testing, technical evaluation, etc.  Sourcing of CVs done through search in our own data base, references, networking through professionals, head hunting and advertising in print media where required and at Client’s requests.  We also organize campus recruitment from educational institutions by written tests, group discussions and interviews.  Senior levels are done by way of presentations and interviews.  Based on Client’s requests, we can carry out reference verification, past employment verification, psychometric testing, etc.  We carry out these processes methodically and hand hold till the selected candidate joins the Organization."
    },
    {
      h2Value: "Training and Development",
      imgSrc: "hero-img.jpg",
      alt: "alt",
      pData:
        "We provide professional training to the employees of our Client Organizations in areas such as Leadership, Communication, Time Management, Stress Management, Negotiation Skills, etc.  We draw experts from different fields to conduct training programmes to meet the client needs."
    },
    {
      h2Value: "HR Systems, Policy and Procedures",
      imgSrc: "hero-img.jpg",
      alt: "alt",
      pData:
        "We undertake HR services such as Policies & Procedures Manual preparation, Performance Management system, Assessment Centres, Competency Mapping and analysis, Internal and External HR Surveys / Climate surveys, compensation & benefits structuring.  These services are customised and done on specific needs.\nWe also conduct Exit interviews in a structured manner and help the Organizations to understand the reasons for employees leaving an Organization to take corrective measures for retention.  It is a cost saving exercise and aimed at arresting the employee attrition rates."
    },
    {
      h2Value: "Employee Engagement programmes",
      imgSrc: "hero-img.jpg",
      alt: "alt",
      pData:
        "Employees are the key strength for any Organisation. Therefore, continuously motivating and retaining the employees is a vital area for any Organization.  We assist in this area by way of arranging various employee engagement programmes such as:  External seminars for the Company Executives at a location out of the office combined with fun programmes, overnight stay, etc.  We also engage the families of the employees (Specifically for the spouses and children with various fun games competitive games) thereby the “bonding between the Company and the employees” is driven to the home strongly."
    },
    {
      h2Value: "Real Estate / Property Management Services",
      imgSrc: "hero-img.jpg",
      alt: "alt",
      pData:
        "We assist corporate clients and Overseas Indians for locating suitable premises for the offices, factories, residential apartments, etc. in the real estate market in Chennai and suburbs.  We help High net worth Overseas Indians to guide them in their investments in real estate, renting out their properties with legal documentation, etc. !"
    }
  ];

  useEffect(() => {
    let observers: IntersectionObserver[] = [];
    const serviceDescElem = serviceDescRef.current;
    if (serviceDescElem) {
      const children = Array.from(serviceDescElem.querySelectorAll(".desc-container"));
      const serviceObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const i = children.findIndex((node) => node.isEqualNode(entry.target));
              setCurrentIndex(i);
            }
          });
        },
        {
          rootMargin: "-10px",
          threshold: 0.9
        }
      );
      observers.push(serviceObserver);
      children.forEach((child) => {
        serviceObserver.observe(child);
      });
    }

    return () => {
      observers.forEach((observer) => {
        observer.disconnect();
      });
      observers = [];
    };
  }, [setCurrentIndex, serviceDescRef]);

  return (
    <div className="services-desc" id="services-desc" ref={serviceDescRef}>
      {egData.map((items, index) => {
        return (
          <div className={`desc-container _${index}`} id={`_${index}`} key={index}>
            <h2>{items.h2Value}</h2>
            <div className="container-wrapper">
              <div className="img-container">
                <Image src={`/assets/images/${items.imgSrc}`} alt={items.alt} fill sizes="100%" />
              </div>
            </div>
            {items.pData.split("\n").map((para, i) => {
              return (
                <Fragment key={i}>
                  <p>{para}</p>
                  <br />
                </Fragment>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
