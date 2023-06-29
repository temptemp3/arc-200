_ () {
	test -f ".env" && {
		echo reading config file...
		source ".env"
		true
	} || {
		cat <<EOF
[WARNING] missing .env file
creating .env file...
EOF
		cp -v .env-sample .env
	}
	read -t 5 || true
	config () {
		true
	}
	update () {
		true
	}
	reset () {
		test ! -d ".reach" || rm -rvf "${_}"
		test ! -f "np.sh" || source "${_}"
		compile
	}
	connector () {
		local i=$( grep -n ${1} -e _ALGO | head -1 | cut '-d:' '-f1' ) 
		local n=$(( $( grep -n ${1} -e _ETH | head -1 | cut '-d:' '-f1' ) - 1 )) 
		sed -n "${i},${n}p" ${1}
		echo "console.log(JSON.stringify({ALGO:_ALGO, template: '${TEMPLATE_NAME:-lite}'}))"
	}
	compile () {
		echo "${REACH_VERSION}"
		REACH_VERSION="${REACH_VERSION}" ./reach compile ${infile:-index}.rsh --install-pkgs --intermediate-files
		REACH_VERSION="${REACH_VERSION}" ./reach compile ${infile:-index}.rsh "${@}"
	}
	eject () {
		_ () {
			node <(connector "${1}")
		}
		_ build/${infile:-index}.main.mjs
	}
	plan-verify () {
		cat <<EOF
{
  "id": "${plan_id}"
}
EOF
	}
	plan-hydrogen () {
		cat <<EOF
{
  "id": "${plan_id}",
  "params": {
    "tok0": ${param_tok0}
  }
} 
EOF
	}
	plan-helium () {
		cat <<EOF
{
  "id": "${plan_id}",
  "params": {
    "tok0": ${param_tok0},
    "tok1": ${param_tok1}
  }
}
EOF
	}
	plan-carbon () {
		cat <<EOF
{
  "id": "${plan_id}",
  "params": {
    "tok0": ${param_tok0},
    "tok1": ${param_tok1},
    "tok2": ${param_tok2},
    "tok3": ${param_tok3},
    "tok4": ${param_tok4},
    "tok5": ${param_tok5}
  }
}
EOF
	}
	plan () {
		case "${1}" in
			(carbon | 3) plan-carbon ;;
			(helium | 2) plan-helium ;;
			(hydrogen | 1) plan-hydrogen ;;
			(verify | atom | 0 | *) plan-verify ;;
		esac
	}
	v2-register () {
		curl -X POST "${API_ENDPOINT_TESTNET}/api/v2/register" -H 'Content-Type: application/json' -H "Authorization: Bearer ${ZB_AUTH_TOKEN}" -d @<( eject )
	}
	v2-launch () {
		local plan_id="${1}" 
		local param_tok0="${2:-${PARAM_TOK0}}" 
		local param_tok1="${3:-${PARAM_TOK1}}" 
		curl -X POST "${API_ENDPOINT_TESTNET}/api/v2/launch" -H 'Content-Type: application/json' -d @<( plan "${TEMPLATE_NAME}" )
	}
	v2-auth() {
		curl -X POST "${API_ENDPOINT_TESTNET}/api/v2/auth" -H 'Content-Type: application/json' -H "Authorization: Bearer ${ZB_AUTH_TOKEN}"
	}
	v2-apps () {
		local plan_id="${1}" 
		curl "${API_ENDPOINT_TESTNET}/api/v2/apps?planId=${plan_id}" -H 'Content-Type: application/json'
	}
	v2-verify-help () {
		cat <<EOF
v2-verify
- verify plan id
USAGE
  v2-verify PLAN_ID
EOF
	}
	v2-verify () {
		local plan_id="${1}" 
		local param_tok0="${2:-${PARAM_TOK0}}" 
		local param_tok1="${3:-${PARAM_TOK1}}" 
		local param_tok2="${4:-${PARAM_TOK2}}" 
		local param_tok3="${5:-${PARAM_TOK3}}" 
		local param_tok4="${6:-${PARAM_TOK4}}" 
		local param_tok5="${7:-${PARAM_TOK5}}" 
		test "${plan_id}" || {
			v2-verify-help
			false
			return
		}
		curl -X POST "${API_ENDPOINT_TESTNET}/api/v2/verify" -H 'Content-Type: application/json' -H "Authorization: Bearer ${ZB_AUTH_TOKEN}" -d @<( plan )
	}
	v1-launch () {
		curl -X POST "${API_ENDPOINT_TESTNET}/api/v1/launch" -H 'Content-Type: application/json' -H "Authorization: Bearer ${ZB_AUTH_TOKEN}" -d @<( eject )
	}
	devnet () {
		local -x REACH_CONNECTOR_MODE=ALGO-devnet 
		./reach devnet
	}
	run () {
		local -x REACH_CONNECTOR_MODE=ALGO-devnet 
		node index.mjs index
	}
	get-reach () {
		test -f "reach" || {
			curl https://docs.reach.sh/reach -o reach --silent
			chmod +x reach
		}
	}
	np () {
		local infile="${1:-index}" 
		test -f "${infile:-index}.rsh" || return
		main () {
			compile && launch
		}
		main
	}
	__ () {
		get-reach
	}
	__
}
_