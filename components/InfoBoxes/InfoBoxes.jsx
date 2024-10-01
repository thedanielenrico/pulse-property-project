import InfoBox from "./InfoBox";

const InfoBoxes = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox
            heading={"For Renters"}
            description={
              "Find your dream rental property. Bookmark properties and contact owners"
            }
            buttonInfo={{
              text: "Browse Properties",
              url: "/properties",
              bgColor: "bg-black",
            }}
            bgColor={"bg-gray-100"}
            textColor={""}
          />
          <InfoBox
            heading={"For Property Owners"}
            description={
              "List your properties and reach potential tenants. Rent as an airbnb or long term."
            }
            buttonInfo={{
              text: "Add Property",
              url: "/add-property",
              bgColor: "bg-blue-500",
            }}
            bgColor={"bg-blue-100"}
            textColor={""}
          />
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
