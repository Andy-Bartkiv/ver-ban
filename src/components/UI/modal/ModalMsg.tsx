import cls from './ModalMsg.module.css';

interface Props {
    msg: false|string,
    setVisible: (newValue: false|string) => void;
};

const ModalMsg: React.FC<Props> = ({ msg, setVisible }) => {
	const rootClasses = (!msg)
		? [cls.modal]
		: [cls.modal, cls.active]
    return (
        <div className = {rootClasses.join(' ')}
            onClick = { () => setVisible(false) }>
            <div className={cls.modal_content}
                onClick = { (e) => e.stopPropagation() }>
                { msg }
            </div>
        </div>
	)
}

export default ModalMsg;