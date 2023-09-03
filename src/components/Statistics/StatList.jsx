import { Container, Statlist, Percentage } from './StatList.styled';
import PropTypes from 'prop-types';

export const StatList = ({events}) => {
    return (
        <Statlist>
            {events.map(event => (
                 <Container key= {event.id}  >
                    <span>{event.label}</span>
                    <Percentage>{event.percentage}%</Percentage>
                </Container>)
            )}
        </Statlist>
    );
}

StatList.propTypes = {
    events: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired, 
        })
    )
}