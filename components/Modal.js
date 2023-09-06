import { motion } from "framer-motion";
import { AiOutlineClose } from 'react-icons/ai';

const Modal = ({ modalStatus, closeModal }) => {
    
    if (!modalStatus) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <motion.div 
                className="relative bg-blue p-10 md:rounded-lg shadow-lg md:m-28 lg:m-48 xl:m-96"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1.0 }}
                transition={{ duration: 0.3 }}
            >
                       {/* Add your modal content here */}
                       <div
                            className="text-black text-center px-10"
                        >
                            The longest word in any of the major English language dictionaries is, a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis. 
                        </div>
                        <button
                            className="absolute top-3 right-[10%] sm:top-2 sm:right-3 rounded-full"
                            onClick={closeModal}
                        >
                            <AiOutlineClose size={24} />
                        </button>
            </motion.div>
        </div >
    )
}

export default Modal

