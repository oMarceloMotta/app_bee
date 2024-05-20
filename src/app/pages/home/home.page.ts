import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { NavController } from '@ionic/angular';

interface CardData {
  title: string;
  subtitle: string;
  image: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {
  sections = [
    {
      sectionTitle: 'PERSONAL ONLINE',
      items: [
        {
          title: 'LEVANTAMENTO DE PESO',
          subtitle: 'CONTINUAR TREINANDO',
          image: 'https://st2.depositphotos.com/1017573/6251/i/450/depositphotos_62512695-stock-photo-bodybuilding-man-and-woman.jpg'
        },
        {
          title: 'YOGA EXPERIEMENTAL',
          subtitle: '',
          image: 'data:image/jpeg;base64,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'
        },
        {
          title: 'CROSSFIT',
          subtitle: '',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZW_3w6Ng4usCojQ0NYtcJJCXW4czxxV28Z02T6DHLbQ&s'
        }
      ],
      register: {
        title: "NOVO",
        subtitle: "TREINO",
        image: 'https://st2.depositphotos.com/1017573/6251/i/450/depositphotos_62512695-stock-photo-bodybuilding-man-and-woman.jpg'
      }
    },
    {
      sectionTitle: 'PROGRAMAS',
      newBadge: true,
      items: [
        {
          title: 'LEVANTAMENTO DE PESO',
          subtitle: 'CONTINUAR TREINANDO',
          image: 'https://img.freepik.com/fotos-gratis/foto-preto-e-branco-de-um-grupo-de-atletas-que-se-exercitam-com-barras-de-peso-em-treinamento-esportivo-em-uma-academia_637285-2485.jpg'
        },
        {
          title: 'YOGA',
          subtitle: '  ',
          image: 'https://img.freepik.com/fotos-gratis/foto-em-preto-e-branco-de-determinado-atleta-levantando-barra-em-uma-academia-enquanto-seus-amigos-atleticos-o-apoiam_637285-2521.jpg'
        },
        {
          title: 'CROSSFIT',
          subtitle: 'CONTINUAR TREINANDO',
          image: 'https://img.freepik.com/fotos-gratis/foto-preto-e-branco-de-homem-de-construcao-muscular-usando-giz-esportivo-nas-maos-enquanto-levantava-peso-em-uma-academia_637285-2509.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1715904000&semt=ais_user'
        }
      ],
      register: {
        title: "NOVO",
        subtitle: "PROGRAMA",
        image: 'https://st2.depositphotos.com/1017573/6251/i/450/depositphotos_62512695-stock-photo-bodybuilding-man-and-woman.jpg'
      }
    },
    {
      sectionTitle: 'CONTEÚDOS',
      items: [
        {
          title: '',
          subtitle: '',
          image: 'https://uploaddeimagens.com.br/images/004/784/829/full/conteudos.png'
        },
        {
          title: '',
          subtitle: '',
          image: 'https://uploaddeimagens.com.br/images/004/784/829/full/conteudos.png'
        },
        {
          title: '',
          subtitle: '',
          image: 'https://uploaddeimagens.com.br/images/004/784/829/full/conteudos.png'
        },
      ]
    }
  ];
  email: String = '';
  nome: String = '';

  constructor(
    private storage: StorageService,
    public navCtrl: NavController,
  ) {

  }
  async ngOnInit() {
    const user = await this.storage.get('user');
    this.email = user.user.email;
    this.nome = user.user.email.split('@')[0];
  }
}
