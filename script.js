// Credenciais
const VALID_USERNAME = "DANIEL";
const VALID_PASSWORD = "DANIELSENSI";

// Login
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('loginError');
    
    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
        document.getElementById('loginContainer').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
        localStorage.setItem('gameOptimizer', 'logged');
    } else {
        errorMsg.textContent = 'Login ou senha incorretos!';
        errorMsg.style.display = 'block';
    }
});

// Verificar se já está logado
window.addEventListener('load', function() {
    if (localStorage.getItem('gameOptimizer') === 'logged') {
        document.getElementById('loginContainer').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
    }
});

// Logout
function logout() {
    localStorage.removeItem('gameOptimizer');
    document.getElementById('loginContainer').style.display = 'flex';
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('loginForm').reset();
    document.getElementById('loginError').style.display = 'none';
}

// Otimizar celular
function optimizePhone() {
    const log = document.getElementById('optimizeLog');
    const btn = document.querySelector('.btn-primary');
    
    log.innerHTML = '';
    btn.disabled = true;
    btn.textContent = 'Otimizando...';
    
    const messages = [
        '⏳ Iniciando otimização...',
        '🗑️ Limpando cache do sistema...',
        '🧠 Liberando memória RAM...',
        '🔧 Desativando serviços desnecessários...',
        '⚡ Aumentando performance...',
        '📊 Otimizando aplicativos em background...',
        '🎮 Ajustando prioridade para jogos...',
        '✅ Otimização concluída com sucesso!'
    ];
    
    let index = 0;
    
    function showMessage() {
        if (index < messages.length) {
            const div = document.createElement('div');
            div.className = 'log-item';
            div.textContent = messages[index];
            log.appendChild(div);
            log.scrollTop = log.scrollHeight;
            index++;
            setTimeout(showMessage, 400);
        } else {
            btn.disabled = false;
            btn.textContent = 'Otimização Concluída! ✅';
            setTimeout(() => {
                btn.textContent = 'Ativar Otimização';
            }, 3000);
        }
    }
    
    showMessage();
}

// Forçar 120 FPS
function toggle120FPS() {
    const toggle = document.getElementById('fps120Toggle');
    const status = document.getElementById('fps120Status');
    const log = document.getElementById('fpsLog');
    
    log.innerHTML = '';
    
    if (toggle.checked) {
        status.textContent = 'Ativado ⚡';
        status.style.color = '#27ae60';
        
        const messages = [
            '⏳ Forçando 120 FPS...',
            '📈 Aumentando taxa de frames...',
            '⚙️ Configurando GPU...',
            '🎮 Sincronizando com aplicação...',
            '✅ 120 FPS Ativado!'
        ];
        
        let index = 0;
        
        function showMessage() {
            if (index < messages.length) {
                const div = document.createElement('div');
                div.className = 'log-item';
                div.textContent = messages[index];
                log.appendChild(div);
                log.scrollTop = log.scrollHeight;
                index++;
                setTimeout(showMessage, 300);
            }
        }
        
        showMessage();
    } else {
        status.textContent = 'Desativado ❌';
        status.style.color = '#e74c3c';
        
        const div = document.createElement('div');
        div.className = 'log-item';
        div.textContent = '⏹️ 120 FPS Desativado';
        log.appendChild(div);
    }
}