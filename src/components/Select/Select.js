import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
    const displayedValue = getDisplayedValue(value, children);

    return (
        <Wrapper>
            <MaskedSelect value={value} onChange={onChange}>
                {children}
            </MaskedSelect>
            <VisibleSelect>
                <Value>{displayedValue}</Value>
                <Icon id="chevron-down" strokeWidth={2} size={24} />
            </VisibleSelect>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: relative;
    width: max-content;
`;

const MaskedSelect = styled.select`
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
`;

const VisibleSelect = styled.div`
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  padding: 12px 16px;
  padding-right: 10px;
  border-radius: 8px;
  font-size: 1rem;
  font-family: Roboto;
  display: flex;
  align-items: center;

  ${MaskedSelect}:focus + & {
    outline: 2px solid ${COLORS.primary};
  }

  ${MaskedSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const Value = styled.span`
    margin-right: 18px;
`;

export default Select;
