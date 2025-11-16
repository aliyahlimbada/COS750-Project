import { useState } from 'react';
import { InteractivePizzaBuilder } from '../InteractivePizzaBuilder';

// Define a type for the answers state
type AnswersState = {
  q1: string | null; 
  q2: string;      
  q3: string | null;
  q4a: string;     
  q4b: string;     
  q4c: string;     
  q5: string;      
};

export const Assessment = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswersState>({
    q1: null, q2: '', q3: null, q4a: '', q4b: '', q4c: '', q5: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  const handleAnswerChange = (question: keyof AnswersState, value: string) => {
    setAnswers(prev => ({ ...prev, [question]: value }));
  };

  const handleSubmit = () => {
    if (isSubmitted) return;

    let currentScore = 0;
    const correctAnswers = {
      q1: 'B',
      q2: '113', 
      q3: 'Aggregation',
      q4a: 'ToppingGroup',
      q4b: 'topping', 
      q4c: 'toppingsList',
      q5Keywords: ['polymorphism'],
    };

    if (answers.q1 === correctAnswers.q1) currentScore++;
    if (answers.q2.includes(correctAnswers.q2)) currentScore++;
    if (answers.q3 === correctAnswers.q3) currentScore++;
    if (
      answers.q4a.trim() === correctAnswers.q4a &&
      answers.q4b.trim() === correctAnswers.q4b &&
      answers.q4c.trim() === correctAnswers.q4c
    ) {
      currentScore++;
    }
    if (correctAnswers.q5Keywords.every(k => answers.q5.toLowerCase().includes(k))) currentScore++;

    setScore(currentScore);
    setIsSubmitted(true);
  };

  // Define our questions as an array of objects
  const questions = [
    { // Question 1
      title: 'Task 1 of 5: Identify the Participants',
      component: (
        <div className="question-block">
          <p className="question-prompt">Based on the pizza scenario, which option correctly maps the classes to the Composite pattern participants?</p>
          <div className="sata-options">
            <label className="option-label"><input type="radio" name="q1" value="A" checked={answers.q1 === 'A'} onChange={e => handleAnswerChange('q1', e.target.value)} /> A: Component=Topping, Leaf=ToppingGroup, Composite=PizzaComponent</label>
            <label className="option-label"><input type="radio" name="q1" value="B" checked={answers.q1 === 'B'} onChange={e => handleAnswerChange('q1', e.target.value)} /> B: Component=PizzaComponent, Leaf=Topping, Composite=ToppingGroup</label>
            <label className="option-label"><input type="radio" name="q1" value="C" checked={answers.q1 === 'C'} onChange={e => handleAnswerChange('q1', e.target.value)} /> C: Component=PizzaComponent, Leaf=ToppingGroup, Composite=Topping</label>
          </div>
        </div>
      )
    },
    { // Question 2
      title: 'Task 2 of 5: Calculate the Cost',
      component: (
        <div className="question-block">
          <p className="question-prompt">Use the interactive builder below to familiarize yourself with the menu. A MeatLovers pizza already includes Pepperoni, Beef Sausage, and Salami.</p>
          <InteractivePizzaBuilder />
          <p style={{marginTop: '1rem'}}><strong>Question:</strong> You want to order a MeatLovers pizza, but add extra Cheese, Green Peppers, and Onions. How much will your final pizza cost?</p>
          <textarea className="design-task code-editor" placeholder="Enter your answer here..." value={answers.q2} onChange={e => handleAnswerChange('q2', e.target.value)} />
        </div>
      )
    },
    { // Question 3
      title: 'Task 3 of 5: Identify Relationship Type',
      component: (
        <div className="question-block">
          <p className="question-prompt">In the pizza system, a ToppingGroup (like MeatLovers) is made up of PizzaComponents. Which relationship type best describes the relationship between PizzaComponent and a ToppingGroup. Think in terms of lifetimes and ownership. </p>
          <div className="sata-options">
            <label className="option-label"><input type="radio" name="q3" value="Aggregation" checked={answers.q3 === 'Aggregation'} onChange={e => handleAnswerChange('q3', e.target.value)} /> A: Aggregation (◇)</label>
            <label className="option-label"><input type="radio" name="q3" value="Composition" checked={answers.q3 === 'Composition'} onChange={e => handleAnswerChange('q3', e.target.value)} /> B: Composition (◆)</label>
            <label className="option-label"><input type="radio" name="q3" value="Inheritance" checked={answers.q3 === 'Inheritance'} onChange={e => handleAnswerChange('q3', e.target.value)} /> C: Inheritance (△)</label>
          </div>
        </div>
      )
    },
    { // Question 4
      title: 'Task 4 of 5: Complete the Code',
      component: (
        <div className="question-block">
          <p className="question-prompt">Consider the ToppingGroup class. Complete the C++ implementation for the addTopping operation, which adds a new PizzaComponent to the end of its internal list.</p>
          <div className="code-block">
            <pre><code>
                {`
                #ifndef TOPPINGGROUP_H
                #define TOPPINGGROUP_H
                #include <list>
                #include "PizzaComponent.h"

                class ToppingGroup : public PizzaComponent {
                public:
                ToppingGroup();
                virtual double getPrice();
                virtual void addTopping(PizzaComponent*);
                virtual void removeTopping(PizzaComponent*);
                ~ToppingGroup();
                private:
                // children
                std::list<PizzaComponent*> toppingsList;
                };

                #endif`}
            </code></pre>
          </div>
          <div className="code-block fitb-code">
            void <input className="blank-input" value={answers.q4a} onChange={e => handleAnswerChange('q4a', e.target.value)} placeholder="(a)" />
            ::addTopping(PizzaComponent* <input className="blank-input" value={answers.q4b} onChange={e => handleAnswerChange('q4b', e.target.value)} placeholder="(b)" />) {'{'}
            <br/>
            &nbsp;&nbsp;<input className="blank-input" value={answers.q4c} onChange={e => handleAnswerChange('q4c', e.target.value)} placeholder="(c)" />.push_back(topping);
            <br/>
            {'}'}
          </div>
        </div>
      )
    },
    { // Question 5
      title: 'Task 5 of 5: Identify the Principle',
      component: (
        <div className="question-block">
          <p className="question-prompt">The client code that calculates the final price can call <code>getPrice()</code> on any object, whether it's a Topping or a ToppingGroup, without needing to know the specific type. What is the name of this fundamental Object-Oriented principle that allows different objects to respond to the same message in different ways?</p>
          <textarea className="design-task code-editor" placeholder="Your answer here..." value={answers.q5} onChange={e => handleAnswerChange('q5', e.target.value)} />
        </div>
      )
    },
  ];

  // showing the scenario
  if (!isStarted) {
    return (
      <div className="summative-container">
        <div className="scenario-description">
          <p>After visiting family abroad in Naples, Italy, Romeo came home to South Africa and dreamt of
                Romeo’s Pizza. A family based pizza shop that puts the customer first by listening to their requests
                and updating the menu as needed.<br></br>
                Romeo uses recipes that his Nonna gave him from Naples. These wood-oven pizzas have taken
                over the Hatfield area with everybody wanting a taste of authentic Italian pizza.<br></br>
                Romeo started off with a Pepperoni pizza and a Vegetarian pizza. After listening to customer
                requests, Romeo introduced the Meat Lovers pizza - an extension of the Pepperoni pizza and the
                Vegetarian Deluxe - an extension of the normal Vegetarian pizza. Romeo wants to make sure that
                he can always create more pizza types or extend existing types for his customers.
            </p>
        </div>
        <button className="start-assessment-btn" onClick={() => setIsStarted(true)}>Start Assessment</button>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

  if (isSubmitted) {
    return (
      <div className="results-view">
        <h2>Assessment Complete!</h2>
        <p className="final-score">Your Score: <strong>{score} / {questions.length}</strong></p>
        <div className="answer-review">
          <h4>Answer Key & Explanations</h4>
          <div className="review-item"><strong>1. Identify the Roles:</strong> Correct answer was B. PizzaComponent is the Component, Topping is the Leaf, and ToppingGroup is the Composite.</div>
          <div className="review-item"><strong>2. Calculate the Cost:</strong> The correct answer is R113.00. (MeatLovers Base: R80.00 + Cheese: R15.00 + Green Peppers: R10.00 + Onions: R8.00 = R113.00).</div>
          <div className="review-item"><strong>3. Evaluate Ownership:</strong> Correct answer is A, Aggregation. A PizzaComponent can either be a Topping or a ToppingGroup, and a Topping can exist even if it is not on a pizza. </div>
          <div className="review-item"><strong>4. Complete the Code:</strong> The correct implementation is <code>void ToppingGroup::addTopping(PizzaComponent* topping)</code>. So the answers are (a) ToppingGroup, (b) topping, and (c) toppingsList.</div>
          <div className="review-item"><strong>5. Identify the Principle:</strong> The principle is Polymorphism. It allows the client to treat different objects (Topping, ToppingGroup) that share a common interface (PizzaComponent) in a uniform way.</div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div style={{ minHeight: '500px' }}>
        <h3>{currentQuestion.title}</h3>
        {currentQuestion.component}
      </div>

      <div className="navigation-buttons">
        <button onClick={() => setCurrentIndex(prev => prev - 1)} disabled={currentIndex === 0} className="nav-btn prev-btn">Previous</button>
        <span className="question-progress">{currentIndex + 1} / {questions.length}</span>
        {currentIndex === questions.length - 1 ? (
          <button onClick={handleSubmit} className="nav-btn submit-btn">Submit Assessment</button>
        ) : (
          <button onClick={() => setCurrentIndex(prev => prev + 1)} className="nav-btn next-btn">Next</button>
        )}
      </div>
    </div>
  );
};