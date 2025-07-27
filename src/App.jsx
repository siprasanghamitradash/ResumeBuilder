import html2pdf from 'html2pdf.js';
import Resume from './Components/resume';
import { useRef, useState } from 'react';

function App() {
  const resumeRef = useRef();
  const [hideExtras, setHideExtras] = useState(false);

  const toggleNoPrint = () => {
    const shouldHide = !hideExtras;
    document.querySelectorAll('.no-print').forEach(el => {
      el.style.display = shouldHide ? 'none' : '';
    });
    setHideExtras(shouldHide);
  };

  const downloadPDF = () => {
    // Temporarily hide .no-print items
    document.querySelectorAll('.no-print').forEach(el => {
      el.style.display = 'none';
    });

    const opt = {
      margin: 0,
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: {
        unit: 'pt',
        format: [595.28, 841.89], // A4
        orientation: 'portrait',
      }
    };

    html2pdf()
      .set(opt)
      .from(resumeRef.current)
      .save()
      .then(() => {
        // Restore .no-print items
        document.querySelectorAll('.no-print').forEach(el => {
          el.style.display = hideExtras ? 'none' : '';
        });
      });
  };

  return (
    <>
      <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
        <button onClick={downloadPDF}>Download PDF</button>
        <button onClick={toggleNoPrint}>
          {hideExtras ? 'Show Buttons' : 'Hide Buttons'}
        </button>
      </div>
      <Resume ref={resumeRef} />
    </>
  );
}

export default App;
