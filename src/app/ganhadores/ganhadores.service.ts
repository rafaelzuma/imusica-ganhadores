import { Injectable } from '@angular/core';

@Injectable()
export class GanhadoresService {

	constructor() { }

	private objMock =
	{
		'winners': {
			'weekly': {
				'award': 'R$ 4.999,99',
				'users': [
					{
						'date': '00/00/0000',
						'name': 'Débora P. F.',
						'msisdn': '21 99999-9999'
					},
					{
						'date': '00/00/0000',
						'name': 'Nathália A. M.',
						'msisdn': '21 99999-9999'
					},
					{
						'date': '00/00/0000',
						'name': 'Otávio P. R.',
						'msisdn': '21 99999-9999'
					},
					{
						'date': '00/00/0000',
						'name': 'Rodrigo P. C.',
						'msisdn': '21 99999-9999'
					},
					{
						'date': '00/00/0000',
						'name': 'Guilherme V. S.',
						'msisdn': '21 99999-9999'
					}
				]
			},
			'quarterly': {
				'award': 'R$ 9.999,99',
				'users': [
					{
						'date': '00/00/0000',
						'name': 'Carolina T. L.',
						'msisdn': '21 99999-9999'
					},
					{
						'date': '00/00/0000',
						'name': 'Raphael S. M.',
						'msisdn': '21 99999-9999'
					},
					{
						'date': '00/00/0000',
						'name': 'Tiego R. S.',
						'msisdn': '21 99999-9999'
					}
				]
			}
		}
	};



	listarGanhadores() {
		return this.objMock;
	}

}
