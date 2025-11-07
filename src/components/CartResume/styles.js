import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 auto;
  justify-content: space-between;
  background: ${props => props.theme.standardTheme.white};
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  margin-bottom: 16px;
  width: 100%;
  max-width: 400px;

  .container-top {
    display: grid;
    flex-direction: column;
    gap: 8px;
    border-bottom: 1px solid ${props => props.theme.standardTheme.lightGray};
    padding-bottom: 12px;
    grid-gap: 15px 25%;
    grid-template-areas:
      "title title"
      "items items-price"
      "delivery-tax delivery-tax-price";
  }

  .title {
    grid-area: title;
    font-size: 20px;
    font-weight: 600;
    color: ${props => props.theme.standardTheme.mainBlack};
    margin-bottom: 8px;
    background-color: ${props => props.theme.standardTheme.darkGray};
    color: ${props => props.theme.standardTheme.white};
    width: 100%;
    border-radius: 2px;
    text-align: center;
    padding: 9px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;


  }

  .items, .delivery-tax, .total {
    grid-area: items, delivery-tax, total;
    font-size: 16px;    
    color: ${props => props.theme.standardTheme.darkGray};    
    text-align: left;
    padding-left: 14px;
  }

  .items-price, .delivery-tax-price, .total-price {
    grid-area: items-price, delivery-tax-price, total-price;
    font-size: 100%;
    font-weight: bold;
    line-height: 25px;
    margin-bottom: 15px;
    color: ${props => props.theme.standardTheme.darkGray};
    align-self: flex-end;        
    text-align: left;
  }

  .container-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 14px;
    background-color: ${props => props.theme.standardTheme.lightGray};
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }

  .total {
    font-size: 20px;
    font-weight: bold;
  }

  .total-price {
    font-size: 22px;
    padding-top: 18px;
    font-weight: bold;
    color: ${props => props.theme.standardTheme.green};
  }

  @media (max-width: 480px) {
    padding: 16px;

    .title {
      font-size: 18px;
    }

    .total, .total-price {
      font-size: 18px;
      
    }
  }
`;
