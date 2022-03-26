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
  {
    q: "Props vs States",
    a: [
      "Props are used to pass data from one component to another component and State data is passed inside the component only.",
      "Props can be used to populate state and can be used with any kind of components. But at earlier days state was only used in a class component",
      "You cannot the data of Props, but you can change sate data as many times as you want.",
      "You can only read Props, but States can be both read and written",
      "Props is passed as an attribute or key from an component to other, and State can be declared using useState hook in functional component",
    ],
  },
  {
    q: "How useState works",
    a: [
      "Before React v16 we could not use states in a functional components, but now useState hooks allows us to use state in a functional component",
      "useState hooks function is called with a initial state, ant it returns an array of 2 variables. One is to access the state and another is to set the state",
      "In a class component state is declared using this.state, but in a functional component useState hook can handle the functionality of the state of a component.",
      "There are many hooks used in React to make the logic of application simple. useState hook make to store the state data in a simpler way",
      "By using useState hook react virtual DOM can quick identify the changes in the dom and apply only the changes efficiently",
    ],
  },
];

const QnA = () => {
  return (
    <section className="container mt-5">
      <h2 className="text-center text-success">FAQ for this Assignment :)</h2>
      <div className="qna-container row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2 mt-3">
        {qnaData.map((item, index) => (
          <div key={index} className="col">
            <article
              style={styles.article}
              className="qna border border-success rounded shadow"
            >
              <div
                style={styles.qContainer}
                className="q-container d-flex align-items-center justify-content-between bg-light p-3"
              >
                <h3 className="fs-4 text-danger">{item.q}</h3>
                <i className="fa-solid fa-chevron-down fs-4 text-primary"></i>
              </div>
              <div className="a-container p-3">
                <ul style={styles.answer}>
                  {item.a.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        ))}
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

  answer: {
    textAlign: "justify",
    textJustify: "inter-word",
  },
  article: { height: "100%" },
};

export default QnA;
