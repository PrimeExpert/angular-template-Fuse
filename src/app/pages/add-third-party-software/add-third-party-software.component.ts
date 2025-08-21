import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface ToggleOption {
  id: string;
  label: string;
  checked: boolean;
}

interface Language {
  id: string;
  name: string;
  checked: boolean;
}

@Component({
  selector: 'app-add-third-party-software',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './add-third-party-software.component.html',
  styleUrls: ['./add-third-party-software.component.scss']
})
export class AddThirdPartySoftwareComponent {
  customerName: string = 'A.R.S. Inamdar Public Library';
  softwareName: string = 'A.R.S. Inamdar Public Library';
  tags: string = '';
  softwareType: string = 'Abby';

  toggleOptions: ToggleOption[] = [
    { id: 'enable-abby', label: 'Enable Abby', checked: true },
    { id: 'fast-objects-extraction', label: 'Fast Objects Extraction', checked: true },
    { id: 'fast-binarization', label: 'Fast Binarization', checked: true },
    { id: 'pdf-image-text', label: 'PDF Image on Text', checked: true },
    { id: 'fast-mode', label: 'Fast Mode', checked: true },
    { id: 'detect-document-structure', label: 'Detect Document Structure', checked: true },
    { id: 'aggressive-text-extraction', label: 'Aggressive Text Extraction', checked: true },
    { id: 'prompt-original-language', label: 'Prompt for Original Language', checked: true },
    { id: 'pdf-mrc-compression', label: 'PDF MRC Compression', checked: true }
  ];

  languages: Language[] = [
    { id: 'check-all', name: 'Check All', checked: true },
    { id: 'afrikaans', name: 'Afrikaans', checked: true },
    { id: 'arabic', name: 'Arabic', checked: true },
    { id: 'bulgarian', name: 'Bulgarian', checked: true },
    { id: 'catalan', name: 'Catalan', checked: true },
    { id: 'chinese-simplified', name: 'Chinese Simplified', checked: true },
    { id: 'chinese-traditional', name: 'Chinese Traditional', checked: true },
    { id: 'croatian', name: 'Croatian', checked: true },
    { id: 'czech', name: 'Czech', checked: true },
    { id: 'danish', name: 'Danish', checked: true },
    { id: 'dutch', name: 'Dutch', checked: true },
    { id: 'english', name: 'English', checked: true },
    { id: 'estonian', name: 'Estonian', checked: true },
    { id: 'fijian', name: 'Fijian', checked: true },
    { id: 'finnish', name: 'Finnish', checked: true },
    { id: 'french', name: 'French', checked: true },
    { id: 'german', name: 'German', checked: true },
    { id: 'greek', name: 'Greek', checked: true },
    { id: 'hebrew', name: 'Hebrew', checked: true },
    { id: 'hungarian', name: 'Hungarian', checked: true },
    { id: 'indonesian', name: 'Indonesian', checked: true },
    { id: 'italian', name: 'Italian', checked: true },
    { id: 'japanese', name: 'Japanese', checked: true },
    { id: 'korean', name: 'Korean', checked: true },
    { id: 'latvian', name: 'Latvian', checked: true },
    { id: 'lithuanian', name: 'Lithuanian', checked: true },
    { id: 'malagasy', name: 'Malagasy', checked: true },
    { id: 'malay', name: 'Malay', checked: true },
    { id: 'maltese', name: 'Maltese', checked: true },
    { id: 'norwegian-bokmal', name: 'Norwegian (Bokmal)', checked: true },
    { id: 'polish', name: 'Polish', checked: true },
    { id: 'portuguese', name: 'Portuguese', checked: true },
    { id: 'romanian', name: 'Romanian', checked: true },
    { id: 'russian', name: 'Russian', checked: true },
    { id: 'samoan', name: 'Samoan', checked: true },
    { id: 'serbian-cyrillic', name: 'Serbian Cyrillic', checked: true },
    { id: 'serbian-latin', name: 'Serbian Latin', checked: true },
    { id: 'slovak', name: 'Slovak', checked: true },
    { id: 'slovenian', name: 'Slovenian', checked: true },
    { id: 'spanish', name: 'Spanish', checked: true },
    { id: 'swedish', name: 'Swedish', checked: true },
    { id: 'tahitian', name: 'Tahitian', checked: true },
    { id: 'thai', name: 'Thai', checked: true },
    { id: 'tongan', name: 'Tongan', checked: true },
    { id: 'turkish', name: 'Turkish', checked: true },
    { id: 'ukrainian', name: 'Ukrainian', checked: true },
    { id: 'vietnamese', name: 'Vietnamese', checked: true },
    { id: 'welsh', name: 'Welsh', checked: true }
  ];

  constructor() {
    console.log('AddThirdPartySoftwareComponent initialized');
  }

  onToggleChange(toggleId: string): void {
    const toggle = this.toggleOptions.find(t => t.id === toggleId);
    if (toggle) {
      toggle.checked = !toggle.checked;
    }
  }

  onLanguageChange(languageId: string): void {
    if (languageId === 'check-all') {
      const checkAllLanguage = this.languages.find(l => l.id === 'check-all');
      if (checkAllLanguage) {
        checkAllLanguage.checked = !checkAllLanguage.checked;
        // Update all other languages to match "Check All" state
        this.languages.forEach(lang => {
          if (lang.id !== 'check-all') {
            lang.checked = checkAllLanguage.checked;
          }
        });
      }
    } else {
      const language = this.languages.find(l => l.id === languageId);
      if (language) {
        language.checked = !language.checked;
        
        // Update "Check All" based on individual language states
        const allLanguagesChecked = this.languages
          .filter(l => l.id !== 'check-all')
          .every(l => l.checked);
        
        const checkAllLanguage = this.languages.find(l => l.id === 'check-all');
        if (checkAllLanguage) {
          checkAllLanguage.checked = allLanguagesChecked;
        }
      }
    }
  }

  onCancel(): void {
    console.log('Cancel clicked');
    // Implement cancel logic - maybe navigate back or reset form
  }

  onSave(): void {
    console.log('Save clicked');
    console.log('Form Data:', {
      customerName: this.customerName,
      softwareName: this.softwareName,
      tags: this.tags,
      softwareType: this.softwareType,
      toggleOptions: this.toggleOptions.filter(t => t.checked),
      selectedLanguages: this.languages.filter(l => l.checked && l.id !== 'check-all')
    });
    // Implement save logic
  }
}
