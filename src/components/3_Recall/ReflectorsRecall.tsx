import RevealableAnswer from '../RevealableAnswer';
import '../../styles/app.scss';

export const ReflectorsRecall = () => (
  <div className="visual-container">
    <div className="feature-request-ticket">
    <h3 className="visual-title">Let's take a moment to look back on your own experiences.</h3>
    <p className="puzzle-question">
      Think about your past experiences where polymorphism and tree like structures would have been beneficial
    </p>
    <RevealableAnswer
      question={
        <p>Think about a past project involving a hierarchy (UI views, categories, documents). How did you manage "parent-child" relationships? What was it like to perform an operation on both individual items and their containers?</p>
      }
      answer={
        <p>Many developers start by writing separate logic and using `if/else` checks to handle containers versus individual items. Often, this leads to repeated code and becomes difficult to maintain as new types are added.</p>
      }
    />
    <RevealableAnswer 
     question={
        <p>Which programming concept would be beneficial in this scenario and why?</p>
     }
     answer={
        <p><strong>Polymorphism</strong> would be ideal in this scenario as it treats objects from the same superclass (or parent class) uniformly. </p>
     }
     />
     <RevealableAnswer
      question={
        <p>Think about a scenario where an <strong>aggregation</strong> relationship would be used, and a scenario where a <strong>composition</strong> relationship would be used.</p>
      }
      answer={
        <p><strong>Aggregation:</strong> A school has teachers. The school and the teacher can exist independently from one another. <br></br> <strong>Composition:</strong> A house contains rooms. Rooms cannot exist without being a part of the house and the house cannot exist without containing rooms.</p>
      }
      />
  </div>
</div>
);