


const ModalStyle = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    bottom            : 0,
    left              : 0,
    right             : 0,
    backgroundColor   : 'rgba(0, 0, 0, 0.75)',
    zIndex            : 999,
    overflowY         : 'scroll',
    paddingLeft       : '50px',
    paddingRight      : '50px'
  },
  content : {

    marginTop                  : '30px',
    marginBottom               : '80px',
    top                        : 0,
    bottom                     : 0,
    left                       : 0,
    right                      : 0,
    border                     : 0,
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '0',
    outline                    : 'none',
    backgroundColor            : 'rgba(0, 0, 0, 0)',
    zIndex                     : 1000,
    opacity                    : '0.3',
    transition                 : 'opacity 0.4s',
    position                   : 'relative'
  }

};

export default ModalStyle;
