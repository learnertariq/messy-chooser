import React from "react";

const qnaData = [
  {
    q: "How React Works",
    a: [
      "The most popular JavaScript library run and executes codes using declarative code.",
      "Meaning that If you see the App component of a react project every top level component is declared in one place",
      "We create components to encapsulate different codes and make the code easier to view at first sight",
      "React uses states to store data so that we can rerender the dom efficiently.",
      "React creates a virtual dom to quickly identify the changes in DOM.",
      "When a state changes react compares the old virtual dom with new one then applies the changes and keeps the rest code untouched",
      "React also uses keys so that the changes can quickly be identified.",
      "In a React Project components are well organized",
    ],
  },
];

const QnA = () => {
  return (
    <section className="container">
      <h2 className="text-center">FAQ for this Assignment :)</h2>
      <div className="qna-container row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2">
        <div className="col">
          <article className="qna border border-success rounded shadow">
            {qnaData.map((item) => (
              <>
                <div
                  style={styles.qContainer}
                  className="q-container d-flex align-items-center justify-content-between bg-light p-3"
                >
                  <h3 style={styles.qHeading} className="fs-4">
                    {item.q}
                  </h3>
                  <i className="fa-solid fa-chevron-down fs-4"></i>
                </div>
                <div className="a-container p-3">
                  <ul style={styles.answer}>
                    {item.a.map((item) => (
                      <li>{item}</li>
                    ))}
                  </ul>
                </div>
              </>
            ))}
          </article>
        </div>
      </div>
    </section>
  );
};

const styles = {
  qContainer: {
    borderBottomWidth: "2px",
    borderBottomStyle: "solid",
    borderColor: "gray",
  },
  qHeading: {
    color: "#ff6e00",
  },
  answer: {
    textAlign: "justify",
    textJustify: "inter-word",
  },
};

export default QnA;
