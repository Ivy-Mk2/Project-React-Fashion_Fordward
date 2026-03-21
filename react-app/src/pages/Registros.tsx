import { useState } from 'react';
import Registro from '../components/Registro/Registro';
import Logo from '../components/Header/Logo';
import { Badge, Button, Card, Input, Modal, PageStatus } from '../components/ui';
import { usePageUXState } from '../hooks/usePageUXState';

const Registros = () => {
  const { pageState, retry, successMessage, showSuccess } = usePageUXState();
  const [isModalOpen, setModalOpen] = useState(false);

  if (pageState === 'loading') {
    return <PageStatus state="loading" title="Cargando formulario" description="Preparando registro." />;
  }

  if (pageState === 'error') {
    return (
      <PageStatus
        state="error"
        title="Error en registro"
        description="No pudimos cargar el módulo de registro."
        onRetry={retry}
      />
    );
  }

  return (
    <>
      <div className="main-header">
        <Logo />
      </div>
      <div className="main-registro">
        <Registro />
      </div>
      <div style={{ maxWidth: 480, margin: '1.6rem auto' }}>
        <Card title="Demo UX states">
          <Input placeholder="Email para novedades" type="email" />
          <div style={{ marginTop: '0.8rem', display: 'flex', gap: '0.8rem' }}>
            <Button onClick={() => showSuccess('Registro exitoso')}>Guardar</Button>
            <Button variant="secondary" onClick={() => setModalOpen(true)}>
              Ver términos
            </Button>
          </div>
          {successMessage ? <div style={{ marginTop: '0.8rem' }}><Badge variant="success">{successMessage}</Badge></div> : null}
        </Card>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} title="Términos y condiciones">
        <p>Al registrarte aceptas políticas de privacidad y uso del sitio.</p>
      </Modal>
    </>
  );
};

export default Registros;
