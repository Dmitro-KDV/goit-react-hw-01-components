import PropTypes from 'prop-types';
import { Title, Container, Statlist, Percentage } from './StatList.styled';

export const Statistics = ({title, stats}) => {
    return (
        <section className="statistics">
            <Title>{title}</Title>
            <Statlist>
                {stats.map(event => (
                    <Container key= {event.id}  >
                        <span>{event.label}</span>
                        <Percentage>{event.percentage}%</Percentage>
                    </Container>)
                )}
            </Statlist>
        </section>
    );
}

Statistics.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired, 
        }).isRequired
    ).isRequired
}