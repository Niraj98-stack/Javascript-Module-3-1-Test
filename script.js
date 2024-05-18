document.addEventListener('DOMContentLoaded', () => {
    const counterValue = document.getElementById('counter-value');
    const incrementBtn = document.getElementById('increment-btn');
    const decrementBtn = document.getElementById('decrement-btn');
    const clearBtn = document.getElementById('clear-btn');
    const errorMsg = document.getElementById('error-msg');

    let count = 0;

    incrementBtn.addEventListener('click', () => {
        count++;
        updateUI();
    });

    decrementBtn.addEventListener('click', () => {
        if (count > 0) {
            count--;
            errorMsg.style.visibility = 'hidden';
            updateUI();
        } else {
            errorMsg.style.visibility = 'visible';
        }
    });

    clearBtn.addEventListener('click', () => {
        count = 0;
        updateUI();
    });

    function updateUI() {
        counterValue.innerHTML = count;
        clearBtn.style.display = count > 0 ? 'block' : 'none';
    }
});
