import React from "react";
import cc from "../../assets/abcd.jpg";

const Contact = () => {
  const data = [
    {
      title: "FoodBridge related queries, feedback and suggestions",
      body: [
        "Techno Main Salt Lake",
        "Salt Lake Sector 5, Kolkata ,India",
        "6203121783",
        "avinashjha4300@gmail.com",
      ],
    },
    {
      title: "For Administrative queries",
      body: [
        "Food Cell, National Food Corporation",
        "Ministry of Health & Family Welfare,New Delhi - 110011",
      ],
    },
  ];
  return (
    <div className="px-64">
      <br />
      <h1 className="text-center text-3xl font-bold">Contact Details</h1>
      <br />
      <div className="flex justify-around">
        <div>
          {data.map((e) => {
            return (
              <>
                <p className="text-xl font-bold underline">{e.title}</p>
                <br />
                <code>
                  {e.body.map((k) => {
                    return <p className="text-md">{k}</p>;
                  })}
                </code>
                <br />
              </>
            );
          })}
        </div>
        <div>
          <img
            src={cc}
            draggable={false}
            width="90%"
            alt=""
            style={{ borderRadius: "50px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
