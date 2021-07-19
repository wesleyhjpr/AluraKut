import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/components/lib/AluraKutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/profileRelations'

function ProfileSidebar(proriedades) {
  return (
    <Box>
      <img src={`https://github.com/${proriedades.githubUser}.png`} style={{ borderRadius: '8px' }} />
    </Box>
  )
}

export default function Home() {
  const usuario = 'wesleyhjpr';
  const pessoasFavoritas =
    [
      'Th3Daniel',
      'RaFaElMOW',
      'udison',
      'czucherato',
      'RodolphoTrinca'
    ];
  return (
    <>
      <AlurakutMenu githubUser={usuario} />
      <MainGrid>
        {/* <Box style="grid-area: profileArea" > */}
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={usuario} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">
              Bem vindo(a)
            </h1>

            <OrkutNostalgicIconSet/>
          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>
            <ul>
              {
                pessoasFavoritas.map((githubUser) => {
                  return (
                    <li>
                      <a href={`/users/${githubUser}`} key={githubUser}>
                        <img src={`https://github.com/${githubUser}.png`} />
                        <span>{githubUser}</span>
                      </a>
                    </li>
                  )
                })
              }
            </ul>
          </ProfileRelationsBoxWrapper>
          <Box>
            Comunidades
          </Box>
        </div>
      </MainGrid>
    </>
  )
}
