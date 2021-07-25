import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const Bar = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: 4px;
`;

const BarLarge = styled(Bar)`
  height: 24px;
  padding: 4px;
  border-radius: 8px;
`;

const BarMedium = styled(Bar)`
  height: 12px;
`

const BarSmall = styled(Bar)`
  height: 8px;
`

const FillBar = styled.div`
  background-color: ${COLORS.primary};
  width: var(--width);
  height: 100%;
  border-radius: 4px 0px 0px 4px;
`;

const Trimmer  = styled.div`
  border-radius: 4px;
  overflow: hidden;
  height: 100%;
`;

const ProgressBar = ({ value, size }) => {
    const Component = {
        large: BarLarge,
        medium: BarMedium,
        small: BarSmall,
    }[size];
    return (
        <Component
            role="progressbar"
            aria-valuenow={value}
            aria-valuemin="0"
            aria-valuemax="100"
        >
            <VisuallyHidden>{value}</VisuallyHidden>
            <Trimmer>
                <FillBar style={{ "--width": `${value}%` }} />
            </Trimmer>
        </Component>
    );
};

export default ProgressBar;
