import { TableTd, TableTbody} from './TransactionHistory.stiled';
import PropTypes from 'prop-types';

export const TransactionHistoryItem = ({items}) => {
    return (
            items.map(({id, type, amount, currency}) => (
                <TableTbody key={id}>
                    <tr>
                        <TableTd>{type}</TableTd>
                        <TableTd>{amount}</TableTd>
                        <TableTd>{currency}</TableTd>
                    </tr>
                </TableTbody>
            ))
    );
}

TransactionHistoryItem.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired, 
        })
    )
}