import React from 'react';
import { Card, Container } from 'react-bootstrap';

const PCOSDietCard = () => {
  return (
      <Container fluid style={{backgroundColor:'#bef2f4'}}>
        <Card.Title style={{ fontSize: '50px', fontWeight: 'bold' }}>PCOS: Why Diet Matters</Card.Title>
        <Card.Text style={{ fontSize: '25px', justifyContent: 'flex-start' }}>
        <br></br>
          <strong>People with polycystic ovary syndrome are more likely to have:</strong>
          <ul>
            <li>Obesity</li>
            <li>Systemic inflammation</li>
            <li>Metabolic syndrome</li>
            <li>Insulin resistance</li>
          </ul>
          These chronic conditions raise the risk of diabetes, cardiovascular disease, and other illnesses.
          <br /><br />
          <strong>Insulin resistance and the importance of a healthy weight:</strong>
          <br />
          Insulin resistance affects 50% to 75% of people with PCOS. In people with insulin resistance, insulin does not convey glucose into cells properly, resulting in glucose building up in the bloodstream and fat cells, raising the risk of diabetes.
          <br /><br />
          <strong>The best diet for PCOS:</strong>
          <br />
          While each patient is approached individually, the Mediterranean diet is commonly recommended due to its wide variety of nutritious foods. It eliminates saturated fats, processed meats, and refined sugar, making it a powerful tool to address inflammation.
          <br /><br />
          <strong>Foods to avoid with PCOS:</strong>
          <ul>
            <li>Fried foods (French fries, potato chips, corn chips, fried chicken or fish)</li>
            <li>Saturated fats such as butter or margarine</li>
            <li>Red meat, processed luncheon meat, and hot dogs</li>
            <li>Processed snacks: cakes, cookies, candy, and pies</li>
            <li>Prepared cereal high in sugar, including instant oatmeal and granola</li>
            <li>Sugary beverages such as sodas, teas, and sports drinks</li>
            <li>Alcoholic beverages</li>
            <li>Refined flour, white bread, rolls, pizza crust, and pasta</li>
            <li>White rice</li>
          </ul>
          <strong>Best foods for PCOS:</strong>
          <ul>
            <li>Omega-3 rich fish, such as salmon</li>
            <li>Olive oil instead of butter or margarine</li>
            <li>Beans and other protein-rich legumes instead of meat</li>
            <li>Non-starchy vegetables such as leafy greens, tomatoes, mushrooms, peppers, broccoli, cauliflower, snow peas, celery, and fennel</li>
            <li>Whole grains, such as brown rice and barley</li>
            <li>Whole fruit for dessert</li>
            <li>Drink plenty of water and low- or no-sugar beverages</li>
          </ul>
          <strong>Fad diets for PCOS? Not recommended:</strong>
          <br />
          Eliminating whole food groups, such as carbohydrates, is not practical for long-term weight control. Choosing low-glycemic carbohydrates, such as fiber-rich whole grains and non-starchy vegetables, can be helpful. It's
          important to keep blood sugar stable and avoid big dips and spikes. Smaller, more frequent meals can be beneficial, along with balanced snacks every four hours.
          <br /><br />
          <strong>PCOS: Take charge</strong>
          <br />
          Alongside diet, exercise, and other healthy lifestyle habits, such as getting plenty of sleep and managing stress, can work together to control PCOS symptoms, lower the risk of developing chronic diseases, and improve overall health.
          <br /><br />
          If you are diagnosed with polycystic ovary syndrome, it doesn't mean that you are destined to have poor health. There is a lot you can do to take charge, minimize symptoms, and keep yourself healthy.
        </Card.Text>
      </Container>

  );
};

const Food = () => {
  return (
    <div>
      
      <div className="d-flex justify-content-center">
        <PCOSDietCard />
      </div>
    </div>
  );
};

export default Food;
